# Prerequisites

**Basic Minimum Knowledge**
What you need to learn before starting on this project

## 1. Python Programming

**Basic Python**
Be comfortable with loops, functions, and classes.

**Data Handling**
Learn NumPy and Pandas for efficient data manipulation.

**Basic Plotting**
Use Matplotlib to visualize data and results.

## 2. Core Deep Learning Concepts

**Neural Networks Basics**
- Neurons
- Weights
- Bias
- Activation functions (ReLU or Sigmoid)

**Backpropagation & Optimization**
- Gradient Descent: Learn weight updating.
- Loss Functions: Focus on cross-entropy and MSE.
- Dump: use dump so to reduce process time
- Optimization: Familiarize yourself with SGD and Adam.

**Overfitting & Regularization**
- Dropout
- L2 regularization.


## 3. Deep Learning Frameworks

**Pick One Framework**
- TensorFlow/Keras (recommended for quick prototyping)
- PyTorch (for flexibility).

**Practical Skills**
- Load datasets like CIFAR-10 or MNIST.
- Train, save, and load models.

## 4. Convolutional Neural Networks (CNNs)

**Architecture Basics**
Learn about convolutional and pooling layers, filters, and feature maps.

**Popular Architectures**
Gain a high-level understanding of ResNet and YOLO.

**Specific Architectures**
Research Mask R-CNN, U-Net, and DETR for instance segmentation implementation.

## 5. Transformers & Attention Mechanisms

**Self-Attention**
Grasp the basics of how attention enhances model focus.

**Transformers**
Familiarize with concepts like DETR for object detection.

## 6. Image Processing Basics

**Preprocessing**
- Learn resizing, normalization, and basic augmentation (e.g., flipping, rotation).
- Advanced augmentation techniques like CutMix or Random Erasing for dataset diversity.

**Instance Segmentation-Specific**
- Multi-scale feature extraction.
- Handling overlapping objects.

## 7. Datasets & Evaluation Metrics

**Common Datasets**
- Explore MS COCO and PASCAL VOC formats.
- Focus on instance segmentation datasets with masks (e.g., COCO).

**Evaluation Metrics** 
- Understand precision, recall, and mAP for object detection.
- Detail IoU (Intersection over Union) for instance segmentation evaluation.

## 8. GPU Usage (Optional but Useful)

**Google Colab**
Leverage free GPUs for training.

**CUDA Basics**
Optional, as Colab handles most GPU requirements.

**Resource Optimization**
Mixed-precision training for faster model training on GPUs.

## 9. GIT and MATHS

**Version Control**
Basic Git for managing code.

**Math Basics**
Brush up on linear algebra and calculus (for understanding backpropagation).

## Recommended Resources (Quick Learning)

**Courses**
- Andrew Ng's Deep Learning Specialization (start with initial modules).

**Books**
- Deep Learning by Ian Goodfellow (focus on Neural Networks and CNN sections).
- Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow (for practical understanding).

#### Teaching a child

- The most simple example of neuron is teaching a child
- A child doesn't know what a car is currently
- You show him a car(INPUT) and tell him that's a car
- Car(OUTPUT) is saved in his memory 
- You show him another car(INPUT)
- The kid learn again about the car(OUTPUT)
- Now the kid will be able to learn by himself and will predict if the thing is car(NEW INPUT) or not(UNCERTAINTY) by using the previous data

#### Teaching a computer

- Currently the computer know nothing
- We give it a set of data
- Then give it some formula to evaluate
- After learning some basics computer will be able to predict what should be the answer according to formula and data or the previous prediction
- There is always uncertainty in unknown dataset so it will not give a 100% true answer everytime.
- The uncertaintly can be decreased with the number of iteration or amount of data

## INSHORT

Teaching a Child (Analogy for Learning)

    A child doesn't know what a car is (INPUT).
    You show them a car and tell them it is a car (OUTPUT).
    The child remembers this and refines predictions with each new example.

Teaching a Computer

    A computer starts with no knowledge.
    We provide it data and formulas to evaluate.
    Predictions improve with iterations, although uncertainty persists for unknown datasets.

Recommendations

Expand on Uncertainty:
Clarify that uncertainty can also be measured using confidence scores in model predictions.
Consider Bayesian approaches to model uncertainty for robust results.

Instance Segmentation-Specific:
Introduce frameworks/tools like Mask R-CNN for instance segmentation.
Highlight datasets specific to instance segmentation (e.g., COCO with segmentation masks).

Optimization Techniques:
Elaborate on techniques like learning rate scheduling and batch normalization to stabilize training.

Evaluation Metrics:
Detail IoU (Intersection over Union), as it is critical for instance segmentation tasks.

Preprocessing Details:
Add advanced augmentation techniques like CutMix or Random Erasing to improve dataset diversity for segmentation.
