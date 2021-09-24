import React from 'react'

const AdminScreen = () => {
    return (
        <div>
            <div>
                <div
                  className="adminHeader"
                >
                  <h3
                    className="adminHeader--title"
                  >
                    Admin Homepage
                  </h3>
                  <h3
                    className="adminHeader--subtitle"
                  >
                    The Inspectorate Games
                  </h3>
                </div>
                <div
                  className="adminCards"
                >
                    <div
                      className="cardAdmin cardCreate"
                    >
                        Create
                        <button
                          className="button"
                        >
                          Create Challenge
                        </button>
                        <button
                          className="button"
                        >
                          Add Challenge question
                        </button>
                    </div>
                    <div
                      className="cardAdmin cardReview"
                    >
                        Review
                        <button
                          className="button"
                        >
                          View Challenge Results
                        </button>
                        <button
                          className="button"
                        >
                          View Challenge Questions
                        </button>
                    </div>
                    <div
                      className="cardAdmin cardPeople"
                    >
                        People
                        <button
                          className="button"
                        >
                          Users
                        </button>
                        <button
                          className="button"
                        >
                          Groups
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminScreen
