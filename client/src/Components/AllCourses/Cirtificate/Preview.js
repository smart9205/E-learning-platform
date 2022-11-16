import { Document, Page, pdfjs } from 'react-pdf';
import './Preview.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Preview = ({ certificate, isLoading }) => {

  return (
    <div className="pdf lg:pb-80 rounded-lg pb-52 md:pb-72">
      {!certificate && (
        <div className="loader">
        </div>
      )}
      {certificate && (
        <Document
          file={certificate}
          loading="Loading..."
        >
          <Page pageNumber={1} />
        </Document>
      )}
    </div>
  )
}

export default Preview