'use client';

import { Drawer, Sidebar, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { HiChartPie } from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div>
        <GiHamburgerMenu
          className='cursor-pointer'
          onClick={() => setIsOpen(true)}
        />
      </div>
      <Drawer open={isOpen} onClose={handleClose}>
        <Drawer.Header title='MENU' titleIcon={() => <></>} />
        <Drawer.Items>
          <Sidebar
            aria-label='Sidebar with multi-level dropdown example'
            className='[&>div]:bg-transparent [&>div]:p-0'
          >
            <div className='flex h-full flex-col justify-between py-2'>
              <div>
                <form className='pb-3'>
                  <TextInput
                    icon={HiChartPie}
                    type='search'
                    placeholder='Search'
                    required
                  />
                </form>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item href='/'>Home</Sidebar.Item>
                    <Sidebar.Item href='/pokemons'>Pokemon list</Sidebar.Item>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
}

export default Navigation;
