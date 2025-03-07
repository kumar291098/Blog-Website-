import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Divider, Typography } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';

const ContentPoints = ({ points }) => {
  return (
    <List>
      {points.map((point, index) => (
        <React.Fragment key={index}>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutline color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="h6" color="textPrimary">
                  {point}
                </Typography>
              }
            />
          </ListItem>
          {index < points.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};

export default ContentPoints;