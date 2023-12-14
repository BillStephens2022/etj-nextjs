// fetch all fundraisers from /api/fundraiser
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || '';

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
