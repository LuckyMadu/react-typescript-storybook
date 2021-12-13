import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
};

export default meta;

export const Default = () => <Button variant="primary">CLICK ME</Button>;

export const Secondary = () => <Button variant="secondary">CLICK ME</Button>;
