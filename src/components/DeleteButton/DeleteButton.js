/** @jsxImportSource theme-ui */

import React from 'react';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { motion } from 'framer-motion';
import { Button } from 'theme-ui';
function DeleteButton({ handleClick, component }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        rotate: [0, 5, -5, 0],
        transition: {
          duration: 0.2,
        },
      }}
      sx={{
        pointer: 'cursor',
      }}
      onClick={() => handleClick(component)}
    >
      <Button
        sx={{
          bg: 'black',
          alignItems: 'center',
          display: 'flex',
          cursor: 'pointer',
        }}
      >
        <DeleteOutlineOutlinedIcon />
      </Button>
    </motion.div>
  );
}

export default DeleteButton;
