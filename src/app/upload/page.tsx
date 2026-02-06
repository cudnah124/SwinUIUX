'use client';

import React from 'react';
import { DocumentUpload } from '@/components/dashboard/DocumentUpload';

export default function UploadPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="mx-auto max-w-5xl px-4">
                <DocumentUpload />
            </div>
        </div>
    );
}
