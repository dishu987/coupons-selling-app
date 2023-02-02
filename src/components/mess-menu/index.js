import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import {
  Flex,
  CircularProgress,
  CircularProgressLabel,
  Stack,
  Button,
} from '@chakra-ui/react';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import './styles.css';
import { useLocation } from 'react-router-dom';
import BreadCrumbs from '../breadcrubs';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function MessMenu() {
  let week = useQuery().get('week');
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(parseInt(week));
  const [progress, setProgress] = useState(0);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  function handleProgress({ loaded, total }) {
    setProgress((loaded / total) * 100);
  }
  const breadData = [
    {
      title: 'Home',
      link: '/',
      current: false,
      isDisabled: true,
    },
    {
      title: 'Mess Menu',
      link: '/messmenu',
      current: false,
      isDisabled: false,
    },
    {
      title: `Week ${pageNumber}`,
      link: '',
      current: true,
      isDisabled: true,
    },
  ];
  return (
    <>
      <BreadCrumbs data={breadData} />
      <Flex
        w={'100%'}
        minH={'100vh'}
        justifyContent={'center'}
        alignItems={'center'}
        flexDir={'column'}
      >
        <Stack direction="row" spacing={4} align="center" p={'10px'}>
          <Button
            colorScheme="teal"
            variant="outline"
            onClick={
              pageNumber === 1
                ? ''
                : () => {
                    const page = pageNumber;
                    setPageNumber(page - 1);
                  }
            }
            isDisabled={pageNumber === 1 ? true : false}
          >
            Previous
          </Button>
          <Button
            colorScheme="teal"
            variant="solid"
            onClick={
              pageNumber == numPages
                ? ''
                : () => {
                    const page = pageNumber;
                    setPageNumber(page + 1);
                  }
            }
            isDisabled={pageNumber == numPages ? true : false}
          >
            Next
          </Button>
        </Stack>
        {progress < 100 && (
          <CircularProgress value={progress} color="green.400">
            <CircularProgressLabel>{progress}%</CircularProgressLabel>
          </CircularProgress>
        )}
        <Document
          file={require('./files/Menu_Final.pdf')}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadProgress={handleProgress}
          className="showpdf"
        >
          <Page
            pageNumber={pageNumber}
            height={1000}
            className="showpdf-page"
          />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </Flex>
    </>
  );
}

export default MessMenu;
