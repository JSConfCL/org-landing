'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

/* ── Fade + slide hacia arriba ── */
export const FadeUp = ({
  children,
  delay = 0,
  duration = 0.7,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 48 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration, delay, ease: EASE_OUT_EXPO }}
  >
    {children}
  </motion.div>
);

/* ── Slide desde la izquierda ── */
export const SlideLeft = ({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -80 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.75, delay, ease: EASE_OUT_EXPO }}
  >
    {children}
  </motion.div>
);

/* ── Slide desde la derecha ── */
export const SlideRight = ({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, x: 80 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.75, delay, ease: EASE_OUT_EXPO }}
  >
    {children}
  </motion.div>
);

/* ── Pop con spring (escala desde 0) ── */
export const PopIn = ({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.6 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ type: 'spring', damping: 14, stiffness: 120, delay }}
  >
    {children}
  </motion.div>
);

/* ── Cae desde arriba con spring + rotación inicial ── */
export const DropIn = ({
  children,
  delay = 0,
  fromRotate = 0,
}: {
  children: ReactNode;
  delay?: number;
  fromRotate?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: -120, rotate: fromRotate }}
    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ type: 'spring', damping: 13, stiffness: 90, delay }}
  >
    {children}
  </motion.div>
);

/* ── Contenedor con stagger para hijos ── */
const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const staggerChild: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT_EXPO } },
};

export const StaggerContainer = ({ children }: { children: ReactNode }) => (
  <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{ once: true, margin: '-80px' }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children }: { children: ReactNode }) => (
  <motion.div variants={staggerChild}>{children}</motion.div>
);

/* ── Ícono que oscila (wobble) al entrar ── */
export const WobbleOnEnter = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ rotate: -15, scale: 0, opacity: 0 }}
    whileInView={{ rotate: [null, 15, -10, 8, -5, 0], scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);
