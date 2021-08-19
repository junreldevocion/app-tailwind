import Layout from "../../components/Layout"
export default function Dashboard() {

    return (<>
        <Layout header="Dashboard">
            <div className="max-w-100 bg-light mx-8 rounded p-4 shadow overflow-hidden"> 
                <form>
                    <div className="px-4 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium text-primary">First name</label>
                                <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-primary-light rounded-md" />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium text-primary">First name</label>
                                <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-primary-light rounded-md" />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium text-primary">First name</label>
                                <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-primary-light rounded-md" />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium text-primary">First name</label>
                                <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-primary-light rounded-md" />
                            </div>
                        </div>
                    </div>
                    <div className="px-4 text-right sm:px-6">
                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Save
                        </button>
                    </div>
                </form>  
            </div>
            
        </Layout>
    </>)
    
}