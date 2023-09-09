import React from 'react';
import { Themes, useTheme } from '@/features/change-theme/lib';

const ThemeSelect = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className='dropdown'>
      <label tabIndex={0} className='btn m-1'>
        Choose theme
      </label>
      <ul
        tabIndex={0}
        className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full'
      >
        {Themes.map((theme) => (
          <li key={theme}>
            <a onClick={() => setTheme(theme)}>{theme}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeSelect;
