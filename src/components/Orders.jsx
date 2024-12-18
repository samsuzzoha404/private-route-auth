import React from "react";

const Orders = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      {/* Orders Table Card */}
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-5">
        {/* Orders Table */}
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* Table Head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Photo</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              <tr>
                <th>1</th>
                <td>
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPnE_fy9lLMRP5DLYLnGN0LRLzZOiEpMrU4g&s"
                        alt="John Doe"
                      />
                    </div>
                  </div>
                </td>
                <td>John Doe</td>
                <td>
                  <span className="badge badge-success">Completed</span>
                </td>
                <td>
                  <button className="btn btn-sm btn-info">View</button>
                  <button className="btn btn-sm ml-4 btn-error">Delete</button>
                </td>
              </tr>
              <tr>
                <th>2</th>
                <td>
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img
                        src="https://spor12.dk/wp-content/uploads/2017/05/speaker-1.jpg"
                        alt="Jane Smith"
                      />
                    </div>
                  </div>
                </td>
                <td>Jane Smith</td>
                <td>
                  <span className="badge badge-warning">Pending</span>
                </td>
                <td>
                  <button className="btn btn-sm btn-info">View</button>
                  <button className="btn btn-sm ml-4 btn-error">Delete</button>
                </td>
              </tr>
              <tr>
                <th>3</th>
                <td>
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img
                        src="https://communication.northwestern.edu/images/faculty/brown-michael.jpeg"
                        alt="Michael Brown"
                      />
                    </div>
                  </div>
                </td>
                <td>Michael Brown</td>
                <td>
                  <span className="badge badge-error">Cancelled</span>
                </td>
                <td>
                  <button className="btn btn-sm btn-info">View</button>
                  <button className="btn btn-sm ml-4 btn-error">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
