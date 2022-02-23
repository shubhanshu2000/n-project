import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined'; import ScienceIcon from '@mui/icons-material/Science';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';

import Image from 'next/image'




function Main() {
  return <div className='border-x-2 px-10 py-5   border-[#808191]'>
    <div className='flex justify-between items-center text-white'>
      <p className='border-b-2 border-[#3772FF]'>Section</p>
      <div className='flex items-center text-sm bg-[#191B20] rounded-2xl py-2 px-4'>
        <AccountBalanceWalletOutlinedIcon className='text-[#3772FF] mr-2' />
        <p>0.2</p>
        <AttachMoneyOutlinedIcon className='text-lg -mr-1 ml-1' />
        <span>XYZ</span>
        <p className='ml-4 px-2 bg-[#A3E3FF] rounded-lg text-[#3772FF]'>Tier 1</p>
      </div>
    </div>

    <div className='text-white relative font-medium bg-[#ABE8FF] rounded-xl px-5 py-3 mt-8'>
      <span className='absolute text-sm text-black bg-white px-2 py-[0.16rem]  -top-1 -right-2 rounded-full'>X</span>
      <p className='text-[#2B2557] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus.</p>
      <div className='absolute top-1 right-0'>

        <Image src="/Untitled.png" alt="image" width="120" height="96" />
      </div>
      <button className='bg-white text-sm text-black px-6 mt-2 py-[0.2rem] rounded-lg'>Tutorial</button>
    </div>



    <div className='text-white bg-[#191B20] flex justify-between items-center mt-6 rounded-3xl p-6'>
      <div>
        <h1 className='text-xl '>Your rewards</h1>
        <p className='py-4  text-3xl font-semibold'>$ 0.26231428</p>
        <div className='flex items-center text-sm font-semibold'>
          <p className='bg-[#353945] px-2 py-[0.1rem] rounded-lg'>$40 AVAX</p>
          <p className='mx-4 bg-[#353945] px-2 py-[0.1rem] rounded-lg'>$10 BNB</p>
          <p className='bg-[#353945] px-2 py-[0.1rem] rounded-lg'>$210 BTC</p>
        </div>
      </div>
      <div className='bg-[#3772FF] py-2 px-4 rounded-xl font-semibold'>
        <OpenInNewOutlinedIcon className='text-lg mr-2' />
        <span >Custom Link</span>
      </div>
    </div>


    <div className='flex justify-between'>

      <div className='text-white bg-[#191B20] p-5 mt-6 rounded-3xl w-[49%]'>
        <div className='flex items-center text-xl'>
          <ScienceIcon className='bg-[#9C92DF] text-2xl p-1 rounded-full' />
          <span className='font-bold mx-2'>12.5%</span>
          <span className='font-semibold'>of fee</span>
        </div>
        <p className='text-[#808191] my-2 text-lg font-medium'>Your Referral Link for xyz</p>
        <div className='flex justify-between bg-[#242731] py-3 px-5 rounded-lg'>
          <p className='font-semibold'>https://unityexchange.design</p>
          <ContentCopyOutlinedIcon />
        </div>
      </div>
      <div className='text-white bg-[#191B20] p-5 mt-6 rounded-3xl w-[49%]'>
        <div className='flex items-center text-xl'>
          <ScienceIcon className='bg-[#9C92DF] text-2xl p-1 rounded-full' />
          <span className='font-bold mx-2'>12.5%</span>
          <span className='font-semibold'>of fee</span>
        </div>
        <p className='text-[#808191] my-2 text-lg font-medium'>Your Referral Link for xyz</p>
        <div className='flex justify-between bg-[#242731] py-3 px-5 rounded-lg'>
          <p className='font-semibold'>https://unityexchange.design</p>
          <ContentCopyOutlinedIcon />
        </div>
      </div>
    </div>



    <div className='text-white font-semibold text-sm'>
      <div className='flex my-6 text-xl  text-[#808191] '>
        <button className='focus:text-white font-semibold active:outline-none focus:border-b-2 focus:border-blue-500'>First Tab</button>
        <button className='ml-6 focus:text-white font-semibold active:outline-none focus:border-b-2 focus:border-blue-500'>Second Tab</button>
      </div>
      <div className='flex justify-between text-[#808191] font-semibold bg-[#191B20] px-6 text-xs rounded-xl py-3'>
        <p>ASSET</p>
        <p>AMOUNT</p>
        <p>USER ACCOUNT</p>
        <p>REFERRAL EARNING</p>
      </div>
      <div className='flex justify-between  bg-[#24273166] px-4 py-4 mt-2 rounded-xl'>
        <div className='flex items-center'>
          <Image src="/bitcoin.png" alt="image" width="25" height="23" />
          <div className='ml-1'>
            <h3>Bitcoin</h3>
            <div className='flex'>
              <p className='text-[#808191] text-xs'>Put</p>
              <div className='flex items-center px-[0.2rem] ml-1 rounded-2xl bg-[#353945]'>
                <Image src="/Ellipse1.png" alt="image" width="12" height="10" />
                <p className='text-[0.4rem]'>AVAX</p>

              </div>
            </div>
          </div>
        </div>
        <div className='-ml-6'>
          <p>0.0000 BNB</p>
          <p className='text-[#808191]'>Expired</p>
        </div>
        <div>
          <p>0xFbE..0f58A7D</p>
        </div>
        <div>
          <p>0.000.BNB</p>
          <div className='flex items-center'>
            <p className='text-[#808191] text-xs'>View on BSC Scan </p>
            <OpenInNewOutlinedIcon className='text-[#808191] ml-1 text-base' />
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Main;