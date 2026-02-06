'use client';

import React, { useState, useCallback } from 'react';
import { FileText, X, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface UploadedFile {
    file: File;
    status: 'pending' | 'success' | 'error';
    errorMessage?: string;
}

export const DocumentUpload: React.FC = () => {
    const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
    const [isDragging, setIsDragging] = useState(false);

    const validateFile = (file: File): { valid: boolean; error?: string } => {
        const allowedTypes = [
            'application/pdf',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/msword',
        ];
        if (!allowedTypes.includes(file.type)) {
            return { valid: false, error: 'Only PDF and DOCX files are allowed' };
        }

        // Max 500MB
        const maxSize = 500 * 1024 * 1024;
        if (file.size > maxSize) {
            return { valid: false, error: 'File size must be less than 500MB' };
        }

        return { valid: true };
    };

    const handleFiles = (files: FileList | null) => {
        if (!files) return;

        const newFiles: UploadedFile[] = Array.from(files).map((file) => {
            const validation = validateFile(file);
            return {
                file,
                status: validation.valid ? 'success' : 'error',
                errorMessage: validation.error,
            };
        });

        setUploadedFiles((prev) => [...prev, ...newFiles]);
    };

    const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        handleFiles(e.dataTransfer.files);
    }, []);

    const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    }, []);

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleFiles(e.target.files);
    };

    const removeFile = (index: number) => {
        setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = () => {
        const validFiles = uploadedFiles.filter((f) => f.status === 'success');
        if (validFiles.length === 0) {
            alert('Please upload at least one valid document');
            return;
        }
        alert(`Successfully prepared ${validFiles.length} document(s) for upload`);
    };

    return (
        <div>
            {/* Navigation Bar */}
            <div className="mb-6 flex items-center justify-between">
                <Link
                    href="/"
                    className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                >
                    <ArrowLeft className="h-5 w-5" />
                    <span className="font-medium">Back to Home</span>
                </Link>

                <Link
                    href="/dashboard"
                    className="rounded-lg bg-creditai-green px-4 py-2 font-medium text-white hover:bg-creditai-green/90"
                >
                    Go to Dashboard
                </Link>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
                {/* Upload Area - 2 columns */}
                <div className="lg:col-span-2">
                    <div className="rounded-xl bg-white p-8 shadow-sm">
                        {/* Header */}
                        <div className="mb-6 flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">Upload Files</h2>
                                <p className="text-sm text-gray-600">Upload files to this project</p>
                            </div>
                        </div>

                        {/* Drag & Drop Area */}
                        <div
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            className={`mb-6 rounded-lg border-2 border-dashed p-12 text-center transition-colors ${isDragging
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-300 bg-gray-50'
                                }`}
                        >
                            <FileText className="mx-auto mb-4 h-12 w-12 text-gray-400" />
                            <p className="mb-2 text-gray-700">
                                Drag & Drop your files here or{' '}
                                <label className="cursor-pointer text-blue-600 hover:underline">
                                    choose files
                                    <input
                                        type="file"
                                        multiple
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleFileInput}
                                        className="hidden"
                                    />
                                </label>
                            </p>
                            <p className="text-sm text-gray-500">500 MB max file size.</p>
                        </div>

                        {/* File List */}
                        {uploadedFiles.length > 0 && (
                            <div className="mb-6 space-y-3">
                                {uploadedFiles.map((uploadedFile, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between rounded-lg bg-gray-50 p-4"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <FileText className="h-5 w-5 text-gray-600" />
                                            <div>
                                                <p className="font-medium text-gray-900">
                                                    {uploadedFile.file.name}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    {(uploadedFile.file.size / (1024 * 1024)).toFixed(1)} MB
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => removeFile(index)}
                                            className="rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-600"
                                        >
                                            <X className="h-5 w-5" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={() => setUploadedFiles([])}
                                className="rounded-lg border border-gray-300 px-6 py-2 font-medium text-gray-700 hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmit}
                                disabled={uploadedFiles.length === 0}
                                className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>

                {/* Instructions Panel - 1 column */}
                <div className="lg:col-span-1">
                    <div className="rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 p-6 shadow-sm">
                        <h3 className="mb-4 text-lg font-bold text-gray-900">📋 Document Requirements</h3>

                        <div className="space-y-4 text-sm text-gray-700">
                            <div>
                                <h4 className="mb-2 font-semibold text-gray-900">What to Upload:</h4>
                                <ul className="ml-4 list-disc space-y-1">
                                    <li>Bank statements (last 3-6 months)</li>
                                    <li>Tax returns</li>
                                    <li>Business registration certificate</li>
                                    <li>Financial statements</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="mb-2 font-semibold text-gray-900">Format Requirements:</h4>
                                <ul className="ml-4 list-disc space-y-1">
                                    <li><strong>File types:</strong> PDF or DOCX only</li>
                                    <li><strong>Max size:</strong> 500 MB per file</li>
                                    <li><strong>Layout:</strong> Vertical/portrait orientation required</li>
                                    <li><strong>Quality:</strong> Text must be clear and readable</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="mb-2 font-semibold text-gray-900">How to Upload:</h4>
                                <ol className="ml-4 list-decimal space-y-1">
                                    <li>Drag files into the upload box, OR</li>
                                    <li>Click "choose files" to browse</li>
                                    <li>Review uploaded files</li>
                                    <li>Click "Next" to submit</li>
                                </ol>
                            </div>

                            <div className="rounded-lg bg-amber-50 border border-amber-200 p-3">
                                <p className="font-semibold text-amber-900">⚠️ Important Note:</p>
                                <p className="mt-1 text-xs text-amber-800">
                                    Documents with horizontal layout will be rejected. All pages must be included.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Tips */}
                    <div className="mt-4 rounded-xl bg-white p-6 shadow-sm">
                        <h4 className="mb-3 text-sm font-bold text-gray-900">💡 Quick Tips</h4>
                        <ul className="space-y-2 text-xs text-gray-600">
                            <li>✓ Scan documents at high quality (300 DPI)</li>
                            <li>✓ Remove password protection before upload</li>
                            <li>✓ Check for correct date ranges</li>
                            <li>✓ Ensure all pages are in order</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
