const controller = new AbortController();

const signal = controller.signal;


console.log("signal:", signal.aborted);



const error=new DOMException(
"The operation was aborted.",
"AbortError",

);

if (error.name === "AbortError"){

    console.log(error.message);
}
