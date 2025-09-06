'use client';

import { Button } from '@/components/ui/button';
import { FaDownload } from 'react-icons/fa6';

export default function ExportSection() {
  return (
    <div className="text-center mt-8">
      <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:from-pink-600 hover:to-purple-700 shadow-xl">
        <FaDownload className="h-5 w-5 mr-3" />
        Export All Ideas
      </Button>
      <p className="text-gray-600 text-sm mt-3">Export to Notion, Google Docs, or CSV format</p>
    </div>
  );
}