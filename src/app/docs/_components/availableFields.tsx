'use client';

import { useState, useEffect } from 'react';
import { getColumnsWithType } from '@/_supabase/functions';
import { GenericTable } from '@/_components/table';
import { TableHead } from '@/_components/table/head';
import { TableRow } from '@/_components/table/row';
import { TableCell } from '@/_components/table/cell';
import { RollerLoader } from '@/_components/loaders/roller';

interface AvailableFieldsProps {
  tableName: string;
}

interface Column {
  column_name: string;
  data_type: string;
}

export function AvailableFields({ tableName }: AvailableFieldsProps) {
  const [columns, setColumns] = useState<Column[]>([]);
  const [showFields, setShowFields] = useState<boolean>(false);

  useEffect(() => {
    const getColsAsync = async (tableName: string) => {
      const { data, error } = await getColumnsWithType(tableName.toLowerCase());
      if (!error && data.length) {
        setColumns(data);
        setShowFields(true);
      } else setShowFields(false);
    };

    getColsAsync(tableName);
  }, [tableName]);

  return (
    <>
      {showFields ? (
        <GenericTable shrink fade>
          <TableHead>
            <th className='uppercase p-3 w-1/2'>Field</th>
            <th className='uppercase p-3 w-3/2'>Data Type</th>
          </TableHead>

          {columns.length ? (
            <tbody>
              {columns.map(({ column_name, data_type }) => (
                <TableRow key={column_name}>
                  <TableCell tight>
                    <span className='snippet'>{column_name}</span>
                  </TableCell>
                  <TableCell tight>{data_type}</TableCell>
                </TableRow>
              ))}
            </tbody>
          ) : (
            <></>
          )}
        </GenericTable>
      ) : (
        <div className='opacity-0 animate-fadeInDelay1 flex justify-center items-center mt-4 min-h-[300px]'>
          <RollerLoader />
        </div>
      )}
    </>
  );
}
