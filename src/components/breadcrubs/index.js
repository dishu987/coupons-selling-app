import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@chakra-ui/icons';
const BreadCrumbs = ({ data }) => {
  return (
    <>
      <Flex
        justifyContent={'flex-start'}
        alignItems={'center'}
        flexWrap={'nowrap'}
        w={'90%'}
        px={'50px'}
        py={'20px'}
      >
        <Breadcrumb separator={<ChevronRightIcon color="gray.500" />}>
          {data.map(d => {
            return (
              <BreadcrumbItem
                isCurrentPage={d.current}
                isDisabled={d.isDisabled}
              >
                <BreadcrumbLink
                  _disabled={d.isDisabled ? true : false}
                  as={Link}
                  to={d.link}
                  color={d.current ? 'blue.400' : 'gray.300'}
                  fontWeight={d.current ? 'bold' : ''}
                >
                  {d.title}
                </BreadcrumbLink>
              </BreadcrumbItem>
            );
          })}
        </Breadcrumb>
      </Flex>
    </>
  );
};

export default BreadCrumbs;
