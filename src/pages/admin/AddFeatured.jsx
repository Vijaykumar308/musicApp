import React, { useState } from "react";

const AddFeaturedProject = () => {
  const [form, setForm] = useState({
    title: "",
    genre: "",
    description: "",
    singer: "",
    youtube: "",
    coverImage: null,
    videoTrack: null,
    musicTrack: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSelect = (e) => {
    setForm({ ...form, genre: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: submit form data
    console.log(form);
  };

  const inputClass = "w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500";
  const labelClass = "block mb-1 font-medium";

  return (
    <div className="p-6">
      <div className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white shadow-2xl rounded-2xl">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Add Featured Music Project</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Title & YouTube Link */}
            <div>
              <label htmlFor="title" className={labelClass}>
                Title *
              </label>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="e.g., Dreamscape"
                className={inputClass}
                value={form.title}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="youtube" className={labelClass}>
                YouTube Link *
              </label>
              <input
                id="youtube"
                name="youtube"
                type="url"
                placeholder="https://youtu.be/..."
                className={inputClass}
                value={form.youtube}
                onChange={handleChange}
                required
              />
            </div>

            {/* Genre & Singer */}
            <div>
              <label htmlFor="genre" className={labelClass}>
                Genre *
              </label>
              <select
                id="genre"
                name="genre"
                className={inputClass}
                value={form.genre}
                onChange={handleSelect}
                required
              >
                <option value="" disabled>
                  Select a genre
                </option>
                <option>Pop</option>
                <option>Rock</option>
                <option>Jazz</option>
                <option>Electronic</option>
                <option>Hip Hop</option>
              </select>
            </div>

            <div>
              <label htmlFor="singer" className={labelClass}>
                Singer
              </label>
              <input
                id="singer"
                name="singer"
                type="text"
                placeholder="Optional singer name"
                className={inputClass}
                value={form.singer}
                onChange={handleChange}
              />
            </div>

            {/* Description spans two columns */}
            <div className="md:col-span-2">
              <label htmlFor="description" className={labelClass}>
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                placeholder="Describe the project..."
                className={inputClass + " resize-none"}
                value={form.description}
                onChange={handleChange}
                required
              />
            </div>

            {/* File uploads */}
            <div>
              <label htmlFor="coverImage" className={labelClass}>
                Cover Image
              </label>
              <input
                id="coverImage"
                name="coverImage"
                type="file"
                accept="image/*"
                className="w-full text-sm text-gray-300"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="videoTrack" className={labelClass}>
                Video Track
              </label>
              <input
                id="videoTrack"
                name="videoTrack"
                type="file"
                accept="video/*"
                className="w-full text-sm text-gray-300"
                onChange={handleChange}
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="musicTrack" className={labelClass}>
                Music Track
              </label>
              <input
                id="musicTrack"
                name="musicTrack"
                type="file"
                accept="audio/*"
                className="w-full text-sm text-gray-300"
                onChange={handleChange}
              />
            </div>

            {/* Submit button */}
            <div className="md:col-span-2 text-right">
              <button
                type="submit"
                className="px-6 py-2 bg-pink-500 hover:bg-pink-600 rounded-lg font-semibold"
              >
                Submit Project
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFeaturedProject;
