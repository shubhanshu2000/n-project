import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import SystemUpdateAltOutlinedIcon from '@mui/icons-material/SystemUpdateAltOutlined';
import Image from 'next/image'









function SideMenu2() {
  return <div>

    <div className='mt-6 mx-3'>
      <div className='text-white flex justify-between  items-center '>
        <div className='flex items-center rounded-xl p-2  bg-[#353945]'>
          <Image src="/Ellipse1.png" alt="image" width="22" height="21" />
          <p>Avalanche</p>
          <KeyboardArrowDownOutlinedIcon />
        </div>
        <div className='ml-4 outline outline-1 outline-offset-1 outline-[#3772FF]  rounded-xl'>

          <div className='flex items-center  p-[0.4rem] '>
            <AccountBalanceWalletOutlinedIcon className='text-[#3772FF] mr-2' />
            <p>0XF6...1353</p>
            <KeyboardArrowDownOutlinedIcon />
          </div>
        </div>
      </div>

      <div className='text-white mt-6  '>
        <div className='flex items-center'>
          <KeyboardBackspaceOutlinedIcon />
          <span className='ml-4 text-lg'>Custom Link</span>
        </div>
        <div className="my-4 ">
          <a href="#">https://testnet.xyz/trade?ref=</a>
          <input className='py-4  my-4 bg-[#242731] w-full rounded-xl placeholder:pl-4 placeholder:text-[#808191]' type="text" placeholder='ENTER' />
        </div>
        <div className='flex items-center justify-around'>
          <div className='bg-[#3772FF] py-2 px-4 rounded-xl  font-semibold'>
            <OpenInNewOutlinedIcon className='text-lg mr-2' />
            <span >Custom Link</span>
          </div>
          <div className='font-semibold border-2 py-2 px-5 rounded-xl border-[#242731]'>
            <SystemUpdateAltOutlinedIcon className='text-lg origin-center -rotate-90 mr-2' />
            <span>Cancel</span>
          </div>
        </div>
      </div>










    </div>
  </div>
}


export default SideMenu2