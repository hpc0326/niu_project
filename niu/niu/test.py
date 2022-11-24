import os
from pathlib import Path
print(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
print(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
print(os.path.abspath(__file__))
print(os.path.dirname(os.path.abspath(__file__)))
print(Path(__file__).resolve().parent)