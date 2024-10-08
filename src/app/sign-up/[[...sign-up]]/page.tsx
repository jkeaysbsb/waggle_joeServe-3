import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return  <div className='overlay'>
  <div className='overlay_background' onClick={onClose} />
  <div className='overlay_container'>
  <SignUp />

</div>
</div>
  
}