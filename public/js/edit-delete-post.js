
async function editPostHandler(event) {
  event.preventDefault();
  const title = document.querySelector("#post-title").innerHTML;
  const body = document.querySelector("#post-body").innerHTML;
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  console.log(title, body);
  document.location.replace("/edit/" + post_id);
}


async function deletePostHandler(event) {
  event.preventDefault();
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch("/api/posts/" + post_id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });


  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText); 
  }
}


document.querySelector("#edit-btn").addEventListener("click", editPostHandler);


document
  .querySelector("#delete-btn")
  .addEventListener("click", deletePostHandler);