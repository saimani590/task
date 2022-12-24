import React, {  useState  } from 'react'
import { Button } from 'react-bootstrap';
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
// import PDFViewer from 'pdf-viewer-reactjs';
import './App.css';
const Doc2 = () => {
    const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
        setPageNumber(1);
	};

	const goToPrevPage = () =>
		setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

	const goToNextPage = () =>
		setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);
  return (
    <div className='container'>
     <div className='col-md-12 '>
         <div className='col-md-6'>
         <h1>Labels</h1><hr/>
         <Button variant="warning">Title</Button>
         <Button variant="success">Author</Button>
         <h1 id='Boxes'>Boxes</h1><hr/>
         </div>
         <div className='col-md-6'>
         <nav>
				<button onClick={goToPrevPage} id="prev">Prev</button>
				<button onClick={goToNextPage}>Next</button>
				<p>
					Page {pageNumber} of {numPages}
				</p>
			</nav>
         <Document
				file="https://arxiv.org/pdf/2212.07937.pdf"
				onLoadSuccess={onDocumentLoadSuccess}
			>
				<Page pageNumber={pageNumber} height="600" />
			</Document>
            
         </div>
     </div>
    </div>
  )
}

export default Doc2;