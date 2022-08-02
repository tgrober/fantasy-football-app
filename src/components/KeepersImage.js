import React from 'react';
// import { Document, Page } from 'react-pdf';
import SinglePagePDFViewer from "../components/single-page";
import keepersPDF from '../images/keepersPDF.pdf';

export default function KeepersImage() {
  return (
    <SinglePagePDFViewer pdf={keepersPDF} />
  );
}
