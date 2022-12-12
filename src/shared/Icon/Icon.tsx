import React from 'react';
import {BlockIcon, CommentIcon, MenuIcon, SaveIcon, ShareIcon, WarningIcon} from "../Icons";

export interface IIconBaseProp{
  size: number
}
export enum EIcons{
  block='block',
  comment='comment',
  save='save',
  share='share',
  warning='warning',
  menu='menu'
}

const getIcon = (size: number) => ({
  block: <BlockIcon size={size}/>,
  comment: <CommentIcon size={size}/>,
  save: <SaveIcon size={size}/>,
  share: <ShareIcon size={size}/>,
  warning: <WarningIcon size={size}/>,
  menu: <MenuIcon size={size}/>
});

interface IIconProps {
  name: EIcons,
  size?: number
}

export function Icon({name, size = 14}: IIconProps) {
  return (
    getIcon(size)[name]
  );
}
