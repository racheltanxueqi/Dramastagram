import React from 'react';

function UserProfile(props) {
    const {user} = props
    const { name, following, followers } = props.user
    return (
        <div className="d-flex justify-content-center">
            <div className="profile-card p-4">
                <div className="d-flex align-items-center">
                    <div className="image"> <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" className="rounded" width="155" /> </div>
                    <div className="ml-3 w-100">
                        <h4 className="mb-0 mt-0">{name || '' }</h4>
                        <div className="p-2 mt-2 bg-light d-flex justify-content-between rounded text-white stats">
                            <div className="d-flex flex-column"> <span className="followings">Followings</span> <span className="number1">{following?.length || 0}</span> </div>
                            <div className="d-flex flex-column"> <span className="followers">Followers</span> <span className="number2">{followers?.length || 0}</span> </div>
                            {/* <div className="d-flex flex-column"> <span className="similarity">Similarity</span> <span className="number3">8.9</span> </div> */}
                        </div>
                        <div className="button mt-2 d-flex flex-row align-items-center">
                            <button className="btn btn-sm btn-primary w-100">Follow</button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;