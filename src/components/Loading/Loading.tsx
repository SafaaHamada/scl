import { FC, ReactElement } from 'react';

import { CircularProgress } from '@mui/material';

interface Props {
  loading: boolean;
  children: ReactElement;
  color?: string;
}

const Loading: FC<Props> = ({ loading, children, color = 'var(--dark-blue)' }) => {
  return loading ? <CircularProgress sx={{ color, mt: 4 }} /> : children;
};

export default Loading;
