import os
import subprocess
import sys

# Helper function to install packages
def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])

print("Installing required libraries for exporting documents...")
try:
    import openpyxl
except ImportError:
    install("openpyxl")

try:
    import pptx
except ImportError:
    install("python-pptx")

try:
    import reportlab
except ImportError:
    install("reportlab")

import openpyxl
from openpyxl.styles import Font, Alignment, PatternFill, Border, Side
from openpyxl.utils import get_column_letter

from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN

from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfgen import canvas

print("Libraries verified and installed successfully!")

# Ensure export directory exists
export_dir = r"C:\Users\HP\.gemini\antigravity\scratch\makhana-hub\exports"
os.makedirs(export_dir, exist_ok=True)
print(f"Export directory set to: {export_dir}")
