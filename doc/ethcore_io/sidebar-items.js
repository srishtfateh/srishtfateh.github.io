initSidebarItems({"constant":[["LOCAL_STACK_SIZE","Stack size Should be modified if it is changed in Rust since it is no way to know or get it"],["TOKENS_PER_HANDLER","Maximum number of tokens a handler can use"]],"enum":[["IoError","IO Error"]],"struct":[["IoChannel","Allows sending messages into the event loop. All the IO handlers will get the message in the `message` callback."],["IoContext","IO access point. This is passed to all IO handlers and provides an interface to the IO subsystem."],["IoManager","Root IO handler. Manages user handlers, messages and IO timers."],["IoService","General IO Service. Starts an event loop and dispatches IO requests. ‘Message’ is a notification message type"]],"trait":[["IoHandler","Generic IO handler. All the handler function are called from within IO event loop. `Message` type is used as notification data"]],"type":[["StreamToken","Timer ID"],["TimerToken","Timer ID"]]});