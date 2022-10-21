import React from "react";

import { Meta, Story } from "@storybook/react";

import { IconSize } from "@src/common/theme";

import * as Icons from "./index";

export default { args: { size: IconSize.large }, component: Icons.AddIcon, title: "Icons" } as Meta;

export const AddIcon: Story = (args) => <Icons.AddIcon {...args} {...args} />;
export const BackIcon: Story = (args) => <Icons.BackIcon {...args} />;
export const CircleIcon: Story = (args) => <Icons.CircleIcon {...args} />;
export const CloseIcon: Story = (args) => <Icons.CloseIcon {...args} />;
export const EditIcon: Story = (args) => <Icons.EditIcon {...args} />;
export const InfoIcon: Story = (args) => <Icons.InfoIcon {...args} />;
export const LanguageIcon: Story = (args) => <Icons.LanguageIcon {...args} />;
export const MenuIcon: Story = (args) => <Icons.MenuIcon {...args} />;
export const NoteIcon: Story = (args) => <Icons.NoteIcon {...args} />;
export const SearchIcon: Story = (args) => <Icons.SearchIcon {...args} />;
export const SettingsIcon: Story = (args) => <Icons.SettingsIcon {...args} />;
export const StarFilledIcon: Story = (args) => <Icons.StarFilledIcon {...args} />;
export const StarIcon: Story = (args) => <Icons.StarIcon {...args} />;
export const TagsIcon: Story = (args) => <Icons.TagsIcon {...args} />;
export const ThemeIcon: Story = (args) => <Icons.ThemeIcon {...args} />;
export const TickIcon: Story = (args) => <Icons.TickIcon {...args} />;
export const TrashIcon: Story = (args) => <Icons.TrashIcon {...args} />;
export const UserRemoveIcon: Story = (args) => <Icons.UserRemoveIcon {...args} />;
export const LogoIcon: Story = (args) => <Icons.LogoIcon {...args} />;
