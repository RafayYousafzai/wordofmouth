"use client";
import { useTheme as useNextTheme } from "next-themes";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import type { ComponentType, SVGProps } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { MdWbSunny } from "react-icons/md";
const MoonIcon = BsMoonStarsFill as unknown as ComponentType<
  SVGProps<SVGSVGElement>
>;
const SunIcon = MdWbSunny as unknown as ComponentType<SVGProps<SVGSVGElement>>;
const MenuItem = DropdownItem as unknown as ComponentType<{
  key?: string;
  startContent?: React.ReactNode;
  children?: React.ReactNode;
}>;
const DarkModeSwitch = () => {
  const { setTheme, resolvedTheme } = useNextTheme();

  return (
    <Dropdown closeOnSelect={false}>
      <DropdownTrigger>
        <Button
          isIconOnly
          radius="full"
          variant="bordered"
          className="w-10 h-10"
        >
          {resolvedTheme === "dark" ? (
            <MoonIcon className="h-5 w-5 text-blue-500" />
          ) : (
            <SunIcon className="h-5 w-5 text-yellow-500" />
          )}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Theme selection"
        onAction={(key) => setTheme(key.toString())}
      >
        <MenuItem
          key="light"
          startContent={<SunIcon className="h-4 w-4 text-yellow-500" />}
        >
          Light
        </MenuItem>
        <MenuItem
          key="dark"
          startContent={<MoonIcon className="h-4 w-4 text-blue-500" />}
        >
          Dark
        </MenuItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DarkModeSwitch;
