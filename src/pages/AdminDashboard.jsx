"use client"

import { useState } from "react"
import { Calendar, Upload } from "lucide-react"
import Header from "../components/Header"

export default function AdminDashboard() {
  const [formData, setFormData] = useState({
    clientName: "",
    email: "",
    phone: "",
    contactPerson: "",
    industry: "",
    address: "",
    projectName: "",
    genre: "",
    status: "pending",
    contractStartDate: "",
    contractEndDate: "",
    projectDescription: "",
    contractValue: "",
    paymentTerms: "",
    keyDeliverables: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission logic here
  }

  const handleReset = () => {
    setFormData({
      clientName: "",
      email: "",
      phone: "",
      contactPerson: "",
      industry: "",
      address: "",
      projectName: "",
      genre: "",
      status: "pending",
      contractStartDate: "",
      contractEndDate: "",
      projectDescription: "",
      contractValue: "",
      paymentTerms: "",
      keyDeliverables: "",
    })
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Client & Project Management</h1>
              <p className="text-gray-400">
                Manage client contact details, project information, and financial agreements.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Client Details Section */}
              <div>
                <h2 className="text-2xl font-semibold text-blue-400 mb-6">Client Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Client Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="clientName"
                      value={formData.clientName}
                      onChange={handleInputChange}
                      placeholder="Artist Name or Company"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="client@example.com"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Contact Person</label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      placeholder="A&R Manager"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Industry</label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                    >
                      <option value="">Select Industry</option>
                      <option value="music">Music</option>
                      <option value="film">Film</option>
                      <option value="gaming">Gaming</option>
                      <option value="advertising">Advertising</option>
                      <option value="podcast">Podcast</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Street, City, Country"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Project Information Section */}
              <div>
                <h2 className="text-2xl font-semibold text-blue-400 mb-6">Project Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Project Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="projectName"
                      value={formData.projectName}
                      onChange={handleInputChange}
                      placeholder="Album Title or Song Name"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Genre</label>
                    <select
                      name="genre"
                      value={formData.genre}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                    >
                      <option value="">Select Genre</option>
                      <option value="pop">Pop</option>
                      <option value="rock">Rock</option>
                      <option value="electronic">Electronic</option>
                      <option value="hip-hop">Hip-Hop</option>
                      <option value="jazz">Jazz</option>
                      <option value="classical">Classical</option>
                      <option value="acoustic">Acoustic</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Status <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                    >
                      <option value="pending">Pending</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                      <option value="on-hold">On Hold</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Contract Start Date</label>
                    <div className="relative">
                      <input
                        type="date"
                        name="contractStartDate"
                        value={formData.contractStartDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                      <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Contract End Date</label>
                    <div className="relative">
                      <input
                        type="date"
                        name="contractEndDate"
                        value={formData.contractEndDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                      <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Project Description</label>
                  <textarea
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    placeholder="Detailed description of the project scope, deliverables, and creative direction."
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Financials & Deliverables Section */}
              <div>
                <h2 className="text-2xl font-semibold text-blue-400 mb-6">Financials & Deliverables</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Contract Value ($) <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="number"
                      name="contractValue"
                      value={formData.contractValue}
                      onChange={handleInputChange}
                      placeholder="5000.00"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Payment Terms</label>
                    <select
                      name="paymentTerms"
                      value={formData.paymentTerms}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                    >
                      <option value="">Select Terms</option>
                      <option value="50-50">50% Upfront, 50% on Completion</option>
                      <option value="30-70">30% Upfront, 70% on Completion</option>
                      <option value="full-upfront">Full Payment Upfront</option>
                      <option value="monthly">Monthly Installments</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Key Deliverables</label>
                    <input
                      type="text"
                      name="keyDeliverables"
                      value={formData.keyDeliverables}
                      onChange={handleInputChange}
                      placeholder="Mixed Master, Stems, WAV files"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Upload Contract/Files</label>
                  <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-400 mb-2">Drag & drop files or click to browse</p>
                    <p className="text-gray-500 text-sm">Max file size: 50MB</p>
                    <button
                      type="button"
                      className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                    >
                      Upload
                    </button>
                  </div>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex justify-end space-x-4 pt-8 border-t border-gray-700">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                >
                  Reset Form
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                >
                  Save Client & Project
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
