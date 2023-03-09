import { ColHTMLAttributes } from 'react';

export type TableColumnProps = ColHTMLAttributes<HTMLTableColElement> & {
  type?: 'income' | 'expense';
};
