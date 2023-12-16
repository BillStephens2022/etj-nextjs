// fetch all fundraisers from /api/fundraiser
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || '';

export const createFundraiser = async (formData) => {
  const response = await fetch(`${BASE_URL}/api/fundraiser`, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log("Fundraiser created successfully: ", data);
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
  return data;
};

export const getFundraisers = async () => {
  try {
    console.log(`${BASE_URL}/api/fundraiser/`);
    const response = await fetch(`${BASE_URL}/api/fundraiser/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Error fetching fundraisers: " + response.statusText);
    }
  } catch (error) {
    throw new Error("Error fetching fundraisers: " + error.message);
  }
}

// fetch a specific fundraisers from /api/fundraiser/[fundraiserId]
export const getFundraiserById = async (fundraiserId) => {
  try {
    const response = await fetch(`${BASE_URL}/api/fundraiser/${fundraiserId}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const fundraiser = await response.json();
      return fundraiser;
    } else {
      throw new Error("Error fetching fundraiser: " + response.statusText);
    }
  } catch (error) {
    throw new Error("Error fetching fundraiser: " + error.message);
  }
}

// delete a specific fundraiser from /api/fundraisers/[fundraiserId]
export const deleteFundraiser = async (fundraiserId) => {
  try {
    console.log(fundraiserId);
    const response = await fetch(`${BASE_URL}/api/fundraiser/${fundraiserId}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      return true;
    } else {
      throw new Error("Error deleting fundraiser: " + response.statusText);
    }
  } catch (error) {
    throw new Error("Error deleting fundraiser: " + error.message);
  }
}

// edit a specific fundraiser at /api/fundraiser/[fundraiserId]
export const editFundraiser = async (fundraiserId, updatedFundraiser) => {
  console.log("Fundraiser Id & updated fundraiser: ", fundraiserId, updatedFundraiser);
  try {
    const response = await fetch(`${BASE_URL}/api/fundraiser/${fundraiserId}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFundraiser),
    });
    console.log("Response from server:", response);
    if (response.ok) {
      return true;
    } else {
      throw new Error("Error editing fundraiser: " + response.statusText);
    }
  } catch (error) {
    throw new Error("Error editing fundraiser: " + error.message);
  }
}

// post a message at /api/messages
export const createMessage = async (formData) => {
  const response = await fetch(`${BASE_URL}/api/messages`, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log("Message created successfully: ", data);
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
  return data;
};

// get all messages from /api/messages
export const getMessages = async () => {
  try {
    console.log(`${BASE_URL}/api/messages/`);
    const response = await fetch(`${BASE_URL}/api/messages/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Error fetching messages: " + response.statusText);
    }
  } catch (error) {
    throw new Error("Error fetching messages: " + error.message);
  }
}
