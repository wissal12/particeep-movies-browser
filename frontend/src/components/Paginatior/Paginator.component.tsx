import { TablePagination } from '@mui/material';
import React, { useEffect } from 'react';

import * as S from './Paginator.styles';

interface PaginatorProps {
  elementsPerPage: number;
  elements: React.ReactNode[];
  ElementsWrapper: React.ComponentType<{ children: React.ReactNode }>;
}

export const Paginator: React.FC<PaginatorProps> = ({
  elements,
  ElementsWrapper,
  elementsPerPage,
}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(0);

  useEffect(() => setRowsPerPage(elementsPerPage), [elementsPerPage]);

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    if (newRowsPerPage === -1) {
      setRowsPerPage(elements.length);
      return;
    }
    setRowsPerPage(newRowsPerPage);
    setPage(0);
  };
  return (
    <S.PaginatorWrapper>
      <ElementsWrapper>
        {elements.slice(page * rowsPerPage, (page + 1) * rowsPerPage)}
      </ElementsWrapper>
      <TablePagination
        component='div'
        count={elements.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[3, 6, 9, { value: -1, label: 'ALL' }]}
      />
    </S.PaginatorWrapper>
  );
};
