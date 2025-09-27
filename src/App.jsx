import { useEffect, useState } from 'react'
import Header from './components/Header'
import ProgressAndResolved from './components/ProgressAndResolved'
import Tickets from './components/Tickets'
import Tasks from './components/Tasks'
import Footer from './components/Footer'
import Loading from './components/Loading'
import { toast, ToastContainer } from 'react-toastify'
import Resolved from './components/Resolved'

function App() {

  const [tickets, setTickets] = useState([])
  const [tasks, setTasks] = useState([])
  const [resolved, setResolved] = useState([])

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('data.json').then(res => res.json()).then(response => {
      setLoading(false)
      setTickets(response)
    }).catch(error => {
      setLoading(false)
      console.log(error)
    })
  }, [])


  const handleTaskSubmit = (data) => {
    const taskData = [
      ...tasks,
      data
    ];
    setTasks(taskData)
    toast.success('In Progress!')
  }

  const handleResolved = (resolvedData) => {
    const updateData = [
      ...resolved,
      resolvedData
    ];
    const filterTaskData = tasks.filter((item) => item.id != resolvedData.id)
    const filterTicketsData = tickets.filter((item) => item.id != resolvedData.id)
    setTasks(filterTaskData)
    setTickets(filterTicketsData)
    setResolved(updateData)

    toast.success('Completed')
  }

  return (
    <>
    <ToastContainer />
      <Header />
      <ProgressAndResolved tasks={tasks} resolved={resolved} />

      <div className="grid grid-cols-12 max-w-[1600px] gap-4 mx-auto px-5">
        <div className="col-span-12 lg:col-span-8">
          <h3 className='text-[#34485A] text-xl font-semibold my-5'>Customer Tickets</h3>
          {loading ? <Loading /> : <Tickets handleTaskSubmit={handleTaskSubmit} tickets={tickets} />}
        </div>
        <div className="col-span-12 lg:col-span-4">

          <h3 className='text-[#34485A] text-xl font-semibold my-5'>Task Status</h3>
          <Tasks tasks={tasks} handleResolved={handleResolved} />

          <h3 className='text-[#34485A] text-xl font-semibold my-5'>Resolved Task</h3>
          <Resolved resolvedTask={resolved} />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App
