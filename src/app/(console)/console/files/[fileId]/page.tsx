// "use client";
//
// import { generateUrlFromIpfsHash } from "@/lib/utils/ipfs";
// import { useFileQuery } from "@/services/graphql/generated";
// import React, { useState } from "react";
// import { Document, Page } from "react-pdf";
//
// interface Props {
//   params: {
//     fileId: string;
//   };
// }
//
// const FilePage: React.FC<Props> = ({ params }) => {
//   const [{ data }] = useFileQuery({ variables: { id: Number(params.fileId) } });
//   const [numPages, setNumPages] = useState<number>();
//   const [pageNumber, setPageNumber] = useState<number>(1);
//
//   function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
//     setNumPages(numPages);
//   }
//
//   return (
//     <div>
//       <Document
//         file={generateUrlFromIpfsHash(data?.file.fileIpfsHash ?? "")}
//         onLoadSuccess={onDocumentLoadSuccess}
//       >
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//     </div>
//   );
// };
//
// export default FilePage;
