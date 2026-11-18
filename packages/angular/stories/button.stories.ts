import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../src/lib/button/button.component';

const meta: Meta<ButtonComponent> = {
    title: 'Components/Button',
    component: ButtonComponent,
    tags: ['autodocs'],
    render: (args) => ({
        props: args,
        template: `
      <facil-button
        [variant]="variant"
        [disabled]="disabled"
      >
        Guardar cambios
      </facil-button>
    `,
    }),
};

export default meta;

type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        disabled: false,
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        disabled: false,
    },
};

export const Disabled: Story = {
    args: {
        variant: 'primary',
        disabled: true,
    },
};