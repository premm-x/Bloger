import { useContext, useState } from 'react';
import { UserContext } from '../config/userContext';
import { axiosInstance } from '../config/axios';
import { uploadToCloudinary } from './AddBlog';

function UpdateProfile() {
  const { userData } = useContext(UserContext);

  const [role, setRole] = useState(userData?.otherDetail?.role || '');
  const [bio, setBio] = useState(userData?.otherDetail?.bio || '');
  const [link, setLink] = useState(userData?.otherDetail?.link || '');
  const [workAt, setWorkAt] = useState(userData?.otherDetail?.workAt || '');
  const [education, setEducation] = useState(userData?.otherDetail?.education || '');
  const [city, setCity] = useState(userData?.otherDetail?.city || '');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  let profilePicRES;

  async function submitHandler(e) {
    e.preventDefault();
    try {

      setLoading(true);

      if (image) {
        profilePicRES = await uploadToCloudinary(image);
      }

      const res = await axiosInstance.put('/user/update', {
        email: userData.email,
        image: profilePicRES,
        role,
        bio,
        link,
        workAt,
        education,
        city,
      });
      console.log('Profile updated successfully:', res.data);
      setLoading(false);

    } catch (error) {
      console.error('Error updating profile:', error);
    }

  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ffffff] text-white p-8">
      <div className="max-w-4xl mx-auto">

        <form onSubmit={submitHandler}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-[#e6f1f8] text-black border-2 border-black rounded-xl p-6">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold mb-1">{userData.username || 'User Name'}</h1>
              </div>
              <div className="flex justify-center mb-6">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#2A2A2A]">
                  <img
                    src={image ? URL.createObjectURL(image) : userData.image || '/user.jpg'}
                    alt={userData.name ? `${userData.name}'s Profile Picture` : 'Profile Pic'}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className='w-full flex items-center justify-center'>
                <input
                  type="file"
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      setImage(e.target.files[0]);
                    }
                  }}
                  id="fileUpload"
                  className="hidden"
                />
                <label
                  htmlFor="fileUpload"
                  className="cursor-pointer bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md"
                >
                  Edit Image
                </label>
              </div>
            </div>

            <div className="md:col-span-2 bg-[#e6f1f8] text-black border-2 border-black rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl">Bio & other details</h2>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-700 text-sm mb-1">My Role</p>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="border border-gray-300 rounded-lg px-2 pb-1"
                    placeholder="Software developer"
                  />
                </div>
                <div>
                  <p className="text-gray-700 text-sm mb-1">About/ bio</p>
                  <input
                    type="text"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="border border-gray-300 rounded-lg px-2 pb-1"
                    placeholder="bio"
                  />
                </div>
                <div>
                  <p className="text-gray-700 text-sm mb-1">Link</p>
                  <input
                    type="text"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    className="border border-gray-300 rounded-lg px-2 pb-1"
                    placeholder="www.google.com"
                  />
                </div>
                <div>
                  <p className="text-gray-700 text-sm mb-1">Work at/</p>
                  <input
                    type="text"
                    value={workAt}
                    onChange={(e) => setWorkAt(e.target.value)}
                    className="border border-gray-300 rounded-lg px-2 pb-1"
                    placeholder="Microsoft"
                  />
                </div>
                <div>
                  <p className="text-gray-700 text-sm mb-1">Education</p>
                  <input
                    type="text"
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                    className="border border-gray-300 rounded-lg px-2 pb-1"
                    placeholder="mahilashamite school"
                  />
                </div>
                <div>
                  <p className="text-gray-700 text-sm mb-1">My City or Region</p>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="border border-gray-300 rounded-lg px-2 pb-1"
                    placeholder="INDIA"
                  />
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-lg"
                >
                  { loading ? "updating..." : "Submit" }
                </button>
                {loading}
              </div>
            </div>

          </div>
        </form>


      </div>
    </div>
  );
}

export default UpdateProfile;
