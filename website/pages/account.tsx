function account() {
  return (
    <div>
      <p>Account</p>
    </div>
  )
}

export default account


/*import {GetServerSideProps} from 'next'
import {User} from '@prisma/client'
import {prisma} from './components/prisma'

interface HomeProps {
  users: User[]
}

function account({user}: HomeProps) {
  return (
    <div>
      <p>{user.username}</p>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const user = await prisma.user.findUnique(
    where: {
      id: 42,
    },
  )
  return {
    props: {
      user
    }
  }
}

export default account*/