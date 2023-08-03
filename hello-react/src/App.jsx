import TaskCard from './TaskCard';

function App() {

  const currentdate = new Date();
  return (
    <div className='px-10 mx-10 mt-5'> 
      <h1 className='mx-4 mb-2 text-3xl font-bold'>Smarter Tasks</h1>
      <p className=' text-md mx-4 mb-5'><strong>Project:</strong> Final Year Project (Revamp College Website)</p>
      <div className="grid grid-cols-2 gap-6">
        <div className='border-4 p-3 rounded-2xl'>
          <h1 className='text-center font-bold text-xl mb-4'>
            Pending
          </h1>
          <TaskCard
            title='Assignment 1'
            completedAtDate={new Date('2023-03-18')}
            dueDate={new Date('2023-02-18')}
            assigneeName='Rohit sir'
          />
          <TaskCard
            title='Assignment 2'
            completedAtDate={new Date('2023-03-18')}
            dueDate={new Date('2023-02-18')}
            assigneeName='Ajay J'
          />
          <TaskCard
            title='Assignment 2'
            completedAtDate={new Date('2023-03-18')}
            dueDate={new Date('2023-02-18')}
            assigneeName='Ajay J'
          />
          <button className='p-2 m-2'>+ New Task</button>
        </div>
        <div className='border-4 p-3 rounded-2xl'>
          <h1 className='text-center font-bold text-xl mb-4'>Done</h1>
          <TaskCard
            title='Assignment 1'
            completedAtDate={new Date('2023-03-18')}
            dueDate={new Date('2023-04-18')}
            assigneeName='Rohit M'
          />
          <TaskCard
            title='Assignment 2'
            completedAtDate={new Date('2023-03-18')}
            dueDate={new Date('2023-04-18')}
            assigneeName='Ajay J'
          />
        </div>
      </div>
    </div>
  )
}

export default App
