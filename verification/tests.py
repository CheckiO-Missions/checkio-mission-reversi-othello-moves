"""
TESTS is a dict with all of your tests.
Keys for this will be the categories' names.
Each test is a dict with
    "input" -- input data for a user function
    "answer" -- your right answer
    "explanation" -- not necessarily a key, it's used for an additional info in animation.
"""


TESTS = {
    "Basics": [
        {
            "input": [[(3, 3), (4, 4)], [(3, 4), (4, 3), (2, 3)]],
            "answer": [(1, 3, 1), (2, 4, 1), (3, 5, 1), (4, 2, 1), (5, 3, 1)],
        },
        {
            "input": [[(3, 3), (4, 4), (2, 3), (2, 5)], [(3, 4), (4, 3), (2, 4)]],
            "answer": [(1, 4, 2), (5, 2, 2), (1, 5, 1), (3, 5, 1), (4, 2, 1), (4, 5, 1), (5, 3, 1)],
        },
    ],
    "Extra": [
        {
            "input": [[(3, 3), (4, 4), (2, 3), (1, 3), (5, 2), (0, 3), (1, 5)], [(3, 4), (4, 3), (4, 2), (3, 5), (2, 5), (1, 4), (2, 2), (2, 4)]],
            "answer": [(3, 6, 4), (0, 4, 3), (1, 6, 3), (2, 6, 3), (4, 5, 3), (4, 1, 2), (4, 6, 2), (0, 5, 1), (1, 1, 1), (2, 1, 1), (3, 1, 1), (3, 2, 1), (5, 1, 1), (5, 3, 1)],
        },
    ]
}
