'use client';
import { Card, Grid, Typography } from '@mui/material';
import { useState } from 'react';

interface IProps {
  description?: string;
  title?: string;
  Icon?: React.ReactNode;
  borderRadius?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectItemFunction?: (item: any, id: string) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item?: any;
  id: string;
  selected?: boolean;
  hover?: number;
  cost?: number;
}

const EstimateCard: React.FC<IProps> = ({
  description,
  Icon,
  borderRadius,
  title,
  selectItemFunction,
  item,
  id,
  selected,
}) => {
  const [checkedState, setCheckedState] = useState(selected || false);

  const handleSelectFunction = () => {
    setCheckedState(!checkedState);
    if (selectItemFunction) {
      selectItemFunction(item, id);
    }
  };
  return (
    <Card
      sx={{
        backgroundColor: checkedState ? '#1976d230' : '',
        cursor: 'pointer',
        padding: '20px 20px  ',
        maxWidth: '93%',
        minWidth: '93%',
        margin: '1.5rem 1rem 1.5rem 0',
        borderRadius: borderRadius,
        boxShadow: '0 5px 11px 0 rgb(206 206 206 / 20%)',
        '&:hover': {
          backgroundColor: '#1976d230',
        },
      }}
      key={title}
      onClick={handleSelectFunction}
    >
      <Grid container>
        <Grid
          item
          xs={1}
          sx={{
            justifyContent: 'start',
            alignItems: 'center',
            display: 'flex',
            // paddingRight:"1rem"
          }}
        >
          {' '}
          {Icon}{' '}
        </Grid>
        <Grid item xs={11} sx={{ paddingLeft: '1rem' }}>
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Typography variant='h6' pl={1}>
                {title}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: 'flex', justifyContent: 'start' }}
            >
              <Typography variant='body2' padding='0px 0 0 0' pl={1}>
                {description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default EstimateCard;
