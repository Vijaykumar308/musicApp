import { Layout } from "lucide-react";
import AdminLayout from "../../components/admin/AdminLayout";

const Dashboard  = () => {
    return <>
    <AdminLayout>
        <div className="container mx-auto">
            <div>
                <h2> Dashboard</h2>
                <p>Here's a summary of your music production</p>
            </div>
        </div>
    </AdminLayout>
    </>
}

export default Dashboard;