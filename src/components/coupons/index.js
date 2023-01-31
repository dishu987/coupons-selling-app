import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuOptionGroup,
  MenuDivider,
  MenuItemOption,
  Flex,
  Input,
  FormControl,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CouponCard from './card';
import NothingToShow from './nothing';

export default function Coupons() {
  const coupons = useSelector(state => state.getcoupons);
  const [isLoaded, setIsLoaded] = useState(false);
  const [search, setSearch] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, []);
  const handleReverse = e => {
    coupons.reverse();
    return;
  };
  return (
    <>
      <Flex
        justifyContent={'flex-end'}
        alignItems={'center'}
        flexWrap={'nowrap'}
        w={'90%'}
        p={'20px'}
      >
        <FormControl w={'79%'} m={'20px'}>
          <Input
            type="text"
            name="search-bar"
            onChange={e => setSearch(e.target.value)}
            placeholder="Search a coupon.."
          />
        </FormControl>{' '}
        <Menu closeOnSelect={false}>
          <MenuButton as={Button} colorScheme="blue">
            Sort By{' '}
          </MenuButton>{' '}
          <MenuList minWidth="240px">
            <MenuOptionGroup
              defaultValue={false}
              onChange={handleReverse}
              title="Order"
              type="radio"
            >
              <MenuItemOption value="0"> Ascending </MenuItemOption>{' '}
              <MenuItemOption value="1"> Descending </MenuItemOption>{' '}
            </MenuOptionGroup>{' '}
            {/* <MenuDivider />
                        <MenuOptionGroup title="Country" type="checkbox">
                          <MenuItemOption value="email">Email</MenuItemOption>
                          <MenuItemOption value="phone">Phone</MenuItemOption>
                          <MenuItemOption value="country">Country</MenuItemOption>
                        </MenuOptionGroup> */}{' '}
          </MenuList>{' '}
        </Menu>{' '}
      </Flex>{' '}
      <Flex
        justifyContent={'center'}
        alignItems={'flex-start'}
        flexWrap={'wrap'}
      >
        {coupons.result.length === 0 && <NothingToShow />}{' '}
        {coupons.result.length &&
          coupons.result
            .filter(
              item =>
                item.title.toLowerCase().includes(search.toLowerCase()) |
                item.price.toLowerCase().includes(search.toLowerCase()) |
                item.mess.toLowerCase().includes(search.toLowerCase()) |
                item.time.toLowerCase().includes(search.toLowerCase()) |
                item.date.toLowerCase().includes(search.toLowerCase())
            )
            .sort((a, b) => (a.expired > b.expired ? 1 : -1))
            .map(coupon => {
              return (
                <CouponCard
                  key={coupon.id}
                  isLoaded={isLoaded}
                  coupon={coupon}
                />
              );
            })}{' '}
      </Flex>{' '}
    </>
  );
}
