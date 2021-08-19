
export default function Login() {
    return (
        <>
            <div className="bg-primary-light h-screen w-full flex items-center justify-center font-roboto">
                <div className="md:w-96 bg-light shadow p-4 rounded">
                    <h1 className="text-primary-dark font-semibold text-2xl text-center p-3">Login here!</h1>
                    <form>
                        <div className="w-full mt-1">
                            <label htmlFor="usernameLabel" className="block text-sm font-medium text-primary-dark">Username</label>
                            <input type="text" name="username" className="block w-full mt-1 border-primary-light border focus:ring-primary focus:border-primary rounded-md shadow-sm text-sm" />
                        </div>
                        <div className="w-full mt-5">
                            <label htmlFor="passwordLabel" className="text-sm block font-medium text-primary-dark">Password</label>
                            <input type="password" name="password" className="block w-full mt-1 border-primary-light border focus:ring-primary focus:border-primary rounded-md shadow-sm text-sm" />
                        </div>
                        <div className="w-full mt-5 text-right">
                            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}