function support() {
  return (
    <div>
      <p className="text-center font-bold text-lg text-white">Please inform your email and the Subject!</p>
      <form className="flex flex-col justify-center" onSubmit={(e)=> e.preventDefault()}>
        <input placeholder="email" type="text" />
        <textarea placeholder="Subject" name="" id="" cols={30} rows={10}></textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default support
