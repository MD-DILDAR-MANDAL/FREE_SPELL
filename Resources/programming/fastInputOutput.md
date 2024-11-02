In competitive programming, fast input/output (I/O) is crucial when dealing with large datasets. Standard I/O functions like `cin` and `cout` in C++ are convenient but can be slow for handling high volumes of data. Optimizing I/O can significantly reduce runtime. Here’s a postmortem of techniques to achieve fast I/O:

### 1. **Using `ios_base::sync_with_stdio(false)` and `cin.tie(NULL)`**

- **Purpose**: These functions disable the synchronization between C++ streams (`cin`, `cout`) and C streams (`scanf`, `printf`), improving I/O speed.

- **Explanation**:
  
  - `ios_base::sync_with_stdio(false)` turns off synchronization between C++ and C streams, allowing C++ streams to be faster.
  - `cin.tie(NULL)` unties `cin` from `cout`. By default, `cin` flushes `cout` before each input operation. This can slow down the program.

- **Usage**:
  
  ```cpp
  std::ios_base::sync_with_stdio(false);
  std::cin.tie(NULL);
  ```

- **Benefit**: Significantly speeds up `cin` and `cout` (often by 2-3 times).

### 2. **Using `getchar_unlocked()` and `putchar_unlocked()`**

- **Purpose**: These are faster alternatives to `cin` and `cout` for character input/output.

- **Explanation**:
  
  - `getchar_unlocked()` and `putchar_unlocked()` are faster because they are not thread-safe, unlike `getchar()` and `putchar()`.

- **Usage**:
  
  ```cpp
  int ch = getchar_unlocked();  // Read a single character
  putchar_unlocked(ch);         // Write a single character
  ```

- **Benefit**: Highly efficient for reading and writing characters, especially useful in custom I/O functions for large inputs/outputs.

### 3. **Using `scanf()` and `printf()`**

- **Purpose**: Standard C-style I/O functions, `scanf` and `printf`, are generally faster than `cin` and `cout`.

- **Explanation**:
  
  - `scanf()` reads formatted input, and `printf()` outputs formatted text. These functions do not have the overhead of stream-based operations used in C++ I/O.

- **Usage**:
  
  ```cpp
  int n;
  scanf("%d", &n);
  printf("%d\n", n);
  ```

- **Benefit**: Faster for large I/O operations due to less overhead compared to `cin` and `cout`.

### 4. **Buffered I/O**

- **Purpose**: Instead of performing multiple I/O operations, you can read all input at once into a buffer and process it.

- **Explanation**:
  
  - The idea is to accumulate input/output into a buffer and process it in one go, reducing the number of I/O calls.

- **Usage Example**:
  
  - **Input Buffer**:
    
    ```cpp
    char buffer[SIZE];
    fread(buffer, 1, SIZE, stdin);  // Read entire input in one go
    ```
  
  - **Output Buffer**:
    
    ```cpp
    char outBuffer[SIZE];
    fwrite(outBuffer, 1, strlen(outBuffer), stdout);  // Write entire output in one go
    ```

- **Benefit**: Reduces system calls, increasing efficiency.

### 5. **Custom Fast I/O Functions**

- **Purpose**: Create your own fast I/O functions using `getchar_unlocked()` or buffered I/O for more flexibility.

- **Example**:
  
  ```cpp
  void fast_input(int &number) {
      number = 0;
      char ch = getchar_unlocked();
      while (ch < '0' || ch > '9') { ch = getchar_unlocked(); }
      while (ch >= '0' && ch <= '9') {
          number = number * 10 + (ch - '0');
          ch = getchar_unlocked();
      }
  }
  
  void fast_output(int number) {
      char buffer[10];
      int i = 0;
      if (number == 0) {
          putchar_unlocked('0');
          return;
      }
      while (number > 0) {
          buffer[i++] = (number % 10) + '0';
          number /= 10;
      }
      while (i > 0) putchar_unlocked(buffer[--i]);
  }
  ```

### 6. **Avoiding endl**

- **Purpose**: `endl` is slower than `'\n'` because it forces a flush of the output buffer.

- **Usage**:
  
  - Instead of:
    
    ```cpp
    std::cout << "Hello World" << std::endl;
    ```
  
  - Use:
    
    ```cpp
    std::cout << "Hello World\n";
    ```
