import { useRouter } from 'next/router'
const MembershipID = () => {
    const router = useRouter()
    const { id } = router.query
    console.log(router.query)
    return <p>Post: {id}</p>
  }
  
  export default MembershipID