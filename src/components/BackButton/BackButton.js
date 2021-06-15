/** @jsxImportSource theme-ui */

import React from 'react';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { startCase } from 'lodash';

function BackButton() {
  const router = useRouter();
  return (
    <motion.div
      whileHover={{
        scale: 0.94,
        transition: {
          duration: 0.1,
        },
      }}
      whileTap={{ scale: 0.8 }}
      initial='hidden'
      animate='visible'
      variants={{
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.1,
          },
        },
      }}
    >
      <div
        sx={{
          ml: 3,
          mt: 2,
          pointer: 'cursor',
        }}
        onClick={() => router.back()}
      >
        <div sx={{ cursor: 'pointer' }}>
          <ArrowBackIosOutlinedIcon />
        </div>
      </div>
    </motion.div>
  );
}

export default BackButton;
