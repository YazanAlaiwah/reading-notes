# read 9

### functional programming

##### What is functional programming?

Functional programming is a programming paradigm — a style of building the structure and elements of computer programs — that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data

##### pure functions

its returns the same result if given the same arguments (it is also referred as deterministic) and does not cause any observable side effects

##### Pure functions benefits

The code’s definitely easier to test. We don’t need to mock anything. So we can unit test pure functions with different contexts:

- Given `a` parameter `A` → expect the function to return value `B`
- Given `a` parameter `C` → expect the function to return value `D`
